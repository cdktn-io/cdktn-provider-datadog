# `tagIndexingRule` Submodule <a name="`tagIndexingRule` Submodule" id="@cdktn/provider-datadog.tagIndexingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagIndexingRule <a name="TagIndexingRule" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule datadog_tag_indexing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer"></a>

```typescript
import { tagIndexingRule } from '@cdktn/provider-datadog'

new tagIndexingRule.TagIndexingRule(scope: Construct, id: string, config: TagIndexingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig">TagIndexingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig">TagIndexingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetExcludeTagsMode">resetExcludeTagsMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetIgnoredMetricNameMatches">resetIgnoredMetricNameMatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions"></a>

```typescript
public putOptions(value: TagIndexingRuleOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

---

##### `resetExcludeTagsMode` <a name="resetExcludeTagsMode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetExcludeTagsMode"></a>

```typescript
public resetExcludeTagsMode(): void
```

##### `resetIgnoredMetricNameMatches` <a name="resetIgnoredMetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetIgnoredMetricNameMatches"></a>

```typescript
public resetIgnoredMetricNameMatches(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TagIndexingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct"></a>

```typescript
import { tagIndexingRule } from '@cdktn/provider-datadog'

tagIndexingRule.TagIndexingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement"></a>

```typescript
import { tagIndexingRule } from '@cdktn/provider-datadog'

tagIndexingRule.TagIndexingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource"></a>

```typescript
import { tagIndexingRule } from '@cdktn/provider-datadog'

tagIndexingRule.TagIndexingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport"></a>

```typescript
import { tagIndexingRule } from '@cdktn/provider-datadog'

tagIndexingRule.TagIndexingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TagIndexingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TagIndexingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TagIndexingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TagIndexingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdByHandle">createdByHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedByHandle">modifiedByHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference">TagIndexingRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ruleOrder">ruleOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsModeInput">excludeTagsModeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatchesInput">ignoredMetricNameMatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatchesInput">metricNameMatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.optionsInput">optionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsMode">excludeTagsMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatches">ignoredMetricNameMatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatches">metricNameMatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdByHandle`<sup>Required</sup> <a name="createdByHandle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.createdByHandle"></a>

```typescript
public readonly createdByHandle: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `modifiedByHandle`<sup>Required</sup> <a name="modifiedByHandle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.modifiedByHandle"></a>

```typescript
public readonly modifiedByHandle: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.options"></a>

```typescript
public readonly options: TagIndexingRuleOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference">TagIndexingRuleOptionsOutputReference</a>

---

##### `ruleOrder`<sup>Required</sup> <a name="ruleOrder" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ruleOrder"></a>

```typescript
public readonly ruleOrder: number;
```

- *Type:* number

---

##### `excludeTagsModeInput`<sup>Optional</sup> <a name="excludeTagsModeInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsModeInput"></a>

```typescript
public readonly excludeTagsModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoredMetricNameMatchesInput`<sup>Optional</sup> <a name="ignoredMetricNameMatchesInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatchesInput"></a>

```typescript
public readonly ignoredMetricNameMatchesInput: string[];
```

- *Type:* string[]

---

##### `metricNameMatchesInput`<sup>Optional</sup> <a name="metricNameMatchesInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatchesInput"></a>

```typescript
public readonly metricNameMatchesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.optionsInput"></a>

```typescript
public readonly optionsInput: IResolvable | TagIndexingRuleOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `excludeTagsMode`<sup>Required</sup> <a name="excludeTagsMode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.excludeTagsMode"></a>

```typescript
public readonly excludeTagsMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoredMetricNameMatches`<sup>Required</sup> <a name="ignoredMetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.ignoredMetricNameMatches"></a>

```typescript
public readonly ignoredMetricNameMatches: string[];
```

- *Type:* string[]

---

##### `metricNameMatches`<sup>Required</sup> <a name="metricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.metricNameMatches"></a>

```typescript
public readonly metricNameMatches: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TagIndexingRuleConfig <a name="TagIndexingRuleConfig" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.Initializer"></a>

```typescript
import { tagIndexingRule } from '@cdktn/provider-datadog'

const tagIndexingRuleConfig: tagIndexingRule.TagIndexingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.metricNameMatches">metricNameMatches</a></code> | <code>string[]</code> | Metric name prefixes (glob patterns) this rule applies to. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.name">name</a></code> | <code>string</code> | Human-readable name for the rule. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.excludeTagsMode">excludeTagsMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, the rule excludes the listed tags and indexes all others. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.ignoredMetricNameMatches">ignoredMetricNameMatches</a></code> | <code>string[]</code> | Metric name prefixes excluded from the rule's scope. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | Versioned configuration options for the rule. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.tags">tags</a></code> | <code>string[]</code> | Tag keys this rule includes or excludes, depending on exclude_tags_mode. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `metricNameMatches`<sup>Required</sup> <a name="metricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.metricNameMatches"></a>

```typescript
public readonly metricNameMatches: string[];
```

- *Type:* string[]

Metric name prefixes (glob patterns) this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#metric_name_matches TagIndexingRule#metric_name_matches}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Human-readable name for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#name TagIndexingRule#name}

---

##### `excludeTagsMode`<sup>Optional</sup> <a name="excludeTagsMode" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.excludeTagsMode"></a>

```typescript
public readonly excludeTagsMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, the rule excludes the listed tags and indexes all others.

When false (default), the rule includes only the listed tags. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#exclude_tags_mode TagIndexingRule#exclude_tags_mode}

---

##### `ignoredMetricNameMatches`<sup>Optional</sup> <a name="ignoredMetricNameMatches" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.ignoredMetricNameMatches"></a>

```typescript
public readonly ignoredMetricNameMatches: string[];
```

- *Type:* string[]

Metric name prefixes excluded from the rule's scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#ignored_metric_name_matches TagIndexingRule#ignored_metric_name_matches}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.options"></a>

```typescript
public readonly options: TagIndexingRuleOptions;
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

Versioned configuration options for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#options TagIndexingRule#options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Tag keys this rule includes or excludes, depending on exclude_tags_mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#tags TagIndexingRule#tags}

---

### TagIndexingRuleOptions <a name="TagIndexingRuleOptions" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.Initializer"></a>

```typescript
import { tagIndexingRule } from '@cdktn/provider-datadog'

const tagIndexingRuleOptions: tagIndexingRule.TagIndexingRuleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.data">data</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a></code> | Behavioral options for how the rule applies to metrics, including backfill and override behavior. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.version">version</a></code> | <code>number</code> | Options schema version. Only `1` is supported. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.data"></a>

```typescript
public readonly data: TagIndexingRuleOptionsData;
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

Behavioral options for how the rule applies to metrics, including backfill and override behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#data TagIndexingRule#data}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Options schema version. Only `1` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#version TagIndexingRule#version}

---

### TagIndexingRuleOptionsData <a name="TagIndexingRuleOptionsData" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.Initializer"></a>

```typescript
import { tagIndexingRule } from '@cdktn/provider-datadog'

const tagIndexingRuleOptionsData: tagIndexingRule.TagIndexingRuleOptionsData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.dynamicTags">dynamicTags</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a></code> | Configuration for including dynamically queried tags. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.managePreexistingMetrics">managePreexistingMetrics</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, the rule applies to metrics ingested before the rule was created. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.metricMatch">metricMatch</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a></code> | Criteria for matching metrics based on query state. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.overridePreviousRules">overridePreviousRules</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, this rule's tag list overrides tags configured by earlier rules for the same metric. |

---

##### `dynamicTags`<sup>Optional</sup> <a name="dynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.dynamicTags"></a>

```typescript
public readonly dynamicTags: TagIndexingRuleOptionsDataDynamicTags;
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

Configuration for including dynamically queried tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#dynamic_tags TagIndexingRule#dynamic_tags}

---

##### `managePreexistingMetrics`<sup>Optional</sup> <a name="managePreexistingMetrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.managePreexistingMetrics"></a>

```typescript
public readonly managePreexistingMetrics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, the rule applies to metrics ingested before the rule was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#manage_preexisting_metrics TagIndexingRule#manage_preexisting_metrics}

---

##### `metricMatch`<sup>Optional</sup> <a name="metricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.metricMatch"></a>

```typescript
public readonly metricMatch: TagIndexingRuleOptionsDataMetricMatch;
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a>

Criteria for matching metrics based on query state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#metric_match TagIndexingRule#metric_match}

---

##### `overridePreviousRules`<sup>Optional</sup> <a name="overridePreviousRules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData.property.overridePreviousRules"></a>

```typescript
public readonly overridePreviousRules: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, this rule's tag list overrides tags configured by earlier rules for the same metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#override_previous_rules TagIndexingRule#override_previous_rules}

---

### TagIndexingRuleOptionsDataDynamicTags <a name="TagIndexingRuleOptionsDataDynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.Initializer"></a>

```typescript
import { tagIndexingRule } from '@cdktn/provider-datadog'

const tagIndexingRuleOptionsDataDynamicTags: tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.queriedTagsWindowSeconds">queriedTagsWindowSeconds</a></code> | <code>number</code> | Lookback window for determining which tags were recently queried. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.relatedAssetTags">relatedAssetTags</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, tags from related assets are included. |

---

##### `queriedTagsWindowSeconds`<sup>Optional</sup> <a name="queriedTagsWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.queriedTagsWindowSeconds"></a>

```typescript
public readonly queriedTagsWindowSeconds: number;
```

- *Type:* number

Lookback window for determining which tags were recently queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#queried_tags_window_seconds TagIndexingRule#queried_tags_window_seconds}

---

##### `relatedAssetTags`<sup>Optional</sup> <a name="relatedAssetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags.property.relatedAssetTags"></a>

```typescript
public readonly relatedAssetTags: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, tags from related assets are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#related_asset_tags TagIndexingRule#related_asset_tags}

---

### TagIndexingRuleOptionsDataMetricMatch <a name="TagIndexingRuleOptionsDataMetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.Initializer"></a>

```typescript
import { tagIndexingRule } from '@cdktn/provider-datadog'

const tagIndexingRuleOptionsDataMetricMatch: tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.isQueried">isQueried</a></code> | <code>boolean \| cdktn.IResolvable</code> | Match metrics that are being queried. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notQueried">notQueried</a></code> | <code>boolean \| cdktn.IResolvable</code> | Match metrics that are not being queried. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notUsedInAssets">notUsedInAssets</a></code> | <code>boolean \| cdktn.IResolvable</code> | Match metrics not used in any dashboards or monitors. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.queriedWindowSeconds">queriedWindowSeconds</a></code> | <code>number</code> | Window in seconds for evaluating query state. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.usedInAssets">usedInAssets</a></code> | <code>boolean \| cdktn.IResolvable</code> | Match metrics used in dashboards or monitors. |

---

##### `isQueried`<sup>Optional</sup> <a name="isQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.isQueried"></a>

```typescript
public readonly isQueried: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Match metrics that are being queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#is_queried TagIndexingRule#is_queried}

---

##### `notQueried`<sup>Optional</sup> <a name="notQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notQueried"></a>

```typescript
public readonly notQueried: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Match metrics that are not being queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#not_queried TagIndexingRule#not_queried}

---

##### `notUsedInAssets`<sup>Optional</sup> <a name="notUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.notUsedInAssets"></a>

```typescript
public readonly notUsedInAssets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Match metrics not used in any dashboards or monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#not_used_in_assets TagIndexingRule#not_used_in_assets}

---

##### `queriedWindowSeconds`<sup>Optional</sup> <a name="queriedWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.queriedWindowSeconds"></a>

```typescript
public readonly queriedWindowSeconds: number;
```

- *Type:* number

Window in seconds for evaluating query state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#queried_window_seconds TagIndexingRule#queried_window_seconds}

---

##### `usedInAssets`<sup>Optional</sup> <a name="usedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch.property.usedInAssets"></a>

```typescript
public readonly usedInAssets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Match metrics used in dashboards or monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/tag_indexing_rule#used_in_assets TagIndexingRule#used_in_assets}

---

## Classes <a name="Classes" id="Classes"></a>

### TagIndexingRuleOptionsDataDynamicTagsOutputReference <a name="TagIndexingRuleOptionsDataDynamicTagsOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer"></a>

```typescript
import { tagIndexingRule } from '@cdktn/provider-datadog'

new tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetQueriedTagsWindowSeconds">resetQueriedTagsWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetRelatedAssetTags">resetRelatedAssetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueriedTagsWindowSeconds` <a name="resetQueriedTagsWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetQueriedTagsWindowSeconds"></a>

```typescript
public resetQueriedTagsWindowSeconds(): void
```

##### `resetRelatedAssetTags` <a name="resetRelatedAssetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.resetRelatedAssetTags"></a>

```typescript
public resetRelatedAssetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSecondsInput">queriedTagsWindowSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTagsInput">relatedAssetTagsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSeconds">queriedTagsWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTags">relatedAssetTags</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queriedTagsWindowSecondsInput`<sup>Optional</sup> <a name="queriedTagsWindowSecondsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSecondsInput"></a>

```typescript
public readonly queriedTagsWindowSecondsInput: number;
```

- *Type:* number

---

##### `relatedAssetTagsInput`<sup>Optional</sup> <a name="relatedAssetTagsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTagsInput"></a>

```typescript
public readonly relatedAssetTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `queriedTagsWindowSeconds`<sup>Required</sup> <a name="queriedTagsWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.queriedTagsWindowSeconds"></a>

```typescript
public readonly queriedTagsWindowSeconds: number;
```

- *Type:* number

---

##### `relatedAssetTags`<sup>Required</sup> <a name="relatedAssetTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.relatedAssetTags"></a>

```typescript
public readonly relatedAssetTags: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagIndexingRuleOptionsDataDynamicTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

---


### TagIndexingRuleOptionsDataMetricMatchOutputReference <a name="TagIndexingRuleOptionsDataMetricMatchOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer"></a>

```typescript
import { tagIndexingRule } from '@cdktn/provider-datadog'

new tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetIsQueried">resetIsQueried</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotQueried">resetNotQueried</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotUsedInAssets">resetNotUsedInAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetQueriedWindowSeconds">resetQueriedWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetUsedInAssets">resetUsedInAssets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsQueried` <a name="resetIsQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetIsQueried"></a>

```typescript
public resetIsQueried(): void
```

##### `resetNotQueried` <a name="resetNotQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotQueried"></a>

```typescript
public resetNotQueried(): void
```

##### `resetNotUsedInAssets` <a name="resetNotUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetNotUsedInAssets"></a>

```typescript
public resetNotUsedInAssets(): void
```

##### `resetQueriedWindowSeconds` <a name="resetQueriedWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetQueriedWindowSeconds"></a>

```typescript
public resetQueriedWindowSeconds(): void
```

##### `resetUsedInAssets` <a name="resetUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.resetUsedInAssets"></a>

```typescript
public resetUsedInAssets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueriedInput">isQueriedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueriedInput">notQueriedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssetsInput">notUsedInAssetsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSecondsInput">queriedWindowSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssetsInput">usedInAssetsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueried">isQueried</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueried">notQueried</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssets">notUsedInAssets</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSeconds">queriedWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssets">usedInAssets</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isQueriedInput`<sup>Optional</sup> <a name="isQueriedInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueriedInput"></a>

```typescript
public readonly isQueriedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notQueriedInput`<sup>Optional</sup> <a name="notQueriedInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueriedInput"></a>

```typescript
public readonly notQueriedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notUsedInAssetsInput`<sup>Optional</sup> <a name="notUsedInAssetsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssetsInput"></a>

```typescript
public readonly notUsedInAssetsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `queriedWindowSecondsInput`<sup>Optional</sup> <a name="queriedWindowSecondsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSecondsInput"></a>

```typescript
public readonly queriedWindowSecondsInput: number;
```

- *Type:* number

---

##### `usedInAssetsInput`<sup>Optional</sup> <a name="usedInAssetsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssetsInput"></a>

```typescript
public readonly usedInAssetsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isQueried`<sup>Required</sup> <a name="isQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.isQueried"></a>

```typescript
public readonly isQueried: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notQueried`<sup>Required</sup> <a name="notQueried" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notQueried"></a>

```typescript
public readonly notQueried: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `notUsedInAssets`<sup>Required</sup> <a name="notUsedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.notUsedInAssets"></a>

```typescript
public readonly notUsedInAssets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `queriedWindowSeconds`<sup>Required</sup> <a name="queriedWindowSeconds" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.queriedWindowSeconds"></a>

```typescript
public readonly queriedWindowSeconds: number;
```

- *Type:* number

---

##### `usedInAssets`<sup>Required</sup> <a name="usedInAssets" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.usedInAssets"></a>

```typescript
public readonly usedInAssets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagIndexingRuleOptionsDataMetricMatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a>

---


### TagIndexingRuleOptionsDataOutputReference <a name="TagIndexingRuleOptionsDataOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer"></a>

```typescript
import { tagIndexingRule } from '@cdktn/provider-datadog'

new tagIndexingRule.TagIndexingRuleOptionsDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags">putDynamicTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putMetricMatch">putMetricMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetDynamicTags">resetDynamicTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetManagePreexistingMetrics">resetManagePreexistingMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetMetricMatch">resetMetricMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetOverridePreviousRules">resetOverridePreviousRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDynamicTags` <a name="putDynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags"></a>

```typescript
public putDynamicTags(value: TagIndexingRuleOptionsDataDynamicTags): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putDynamicTags.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

---

##### `putMetricMatch` <a name="putMetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putMetricMatch"></a>

```typescript
public putMetricMatch(value: TagIndexingRuleOptionsDataMetricMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.putMetricMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a>

---

##### `resetDynamicTags` <a name="resetDynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetDynamicTags"></a>

```typescript
public resetDynamicTags(): void
```

##### `resetManagePreexistingMetrics` <a name="resetManagePreexistingMetrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetManagePreexistingMetrics"></a>

```typescript
public resetManagePreexistingMetrics(): void
```

##### `resetMetricMatch` <a name="resetMetricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetMetricMatch"></a>

```typescript
public resetMetricMatch(): void
```

##### `resetOverridePreviousRules` <a name="resetOverridePreviousRules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.resetOverridePreviousRules"></a>

```typescript
public resetOverridePreviousRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTags">dynamicTags</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference">TagIndexingRuleOptionsDataDynamicTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatch">metricMatch</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference">TagIndexingRuleOptionsDataMetricMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTagsInput">dynamicTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetricsInput">managePreexistingMetricsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatchInput">metricMatchInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRulesInput">overridePreviousRulesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetrics">managePreexistingMetrics</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRules">overridePreviousRules</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dynamicTags`<sup>Required</sup> <a name="dynamicTags" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTags"></a>

```typescript
public readonly dynamicTags: TagIndexingRuleOptionsDataDynamicTagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTagsOutputReference">TagIndexingRuleOptionsDataDynamicTagsOutputReference</a>

---

##### `metricMatch`<sup>Required</sup> <a name="metricMatch" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatch"></a>

```typescript
public readonly metricMatch: TagIndexingRuleOptionsDataMetricMatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatchOutputReference">TagIndexingRuleOptionsDataMetricMatchOutputReference</a>

---

##### `dynamicTagsInput`<sup>Optional</sup> <a name="dynamicTagsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.dynamicTagsInput"></a>

```typescript
public readonly dynamicTagsInput: IResolvable | TagIndexingRuleOptionsDataDynamicTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataDynamicTags">TagIndexingRuleOptionsDataDynamicTags</a>

---

##### `managePreexistingMetricsInput`<sup>Optional</sup> <a name="managePreexistingMetricsInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetricsInput"></a>

```typescript
public readonly managePreexistingMetricsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `metricMatchInput`<sup>Optional</sup> <a name="metricMatchInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.metricMatchInput"></a>

```typescript
public readonly metricMatchInput: IResolvable | TagIndexingRuleOptionsDataMetricMatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataMetricMatch">TagIndexingRuleOptionsDataMetricMatch</a>

---

##### `overridePreviousRulesInput`<sup>Optional</sup> <a name="overridePreviousRulesInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRulesInput"></a>

```typescript
public readonly overridePreviousRulesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `managePreexistingMetrics`<sup>Required</sup> <a name="managePreexistingMetrics" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.managePreexistingMetrics"></a>

```typescript
public readonly managePreexistingMetrics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `overridePreviousRules`<sup>Required</sup> <a name="overridePreviousRules" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.overridePreviousRules"></a>

```typescript
public readonly overridePreviousRules: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagIndexingRuleOptionsData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

---


### TagIndexingRuleOptionsOutputReference <a name="TagIndexingRuleOptionsOutputReference" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer"></a>

```typescript
import { tagIndexingRule } from '@cdktn/provider-datadog'

new tagIndexingRule.TagIndexingRuleOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData">putData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putData` <a name="putData" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData"></a>

```typescript
public putData(value: TagIndexingRuleOptionsData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.putData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.data">data</a></code> | <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference">TagIndexingRuleOptionsDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.dataInput">dataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.data"></a>

```typescript
public readonly data: TagIndexingRuleOptionsDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsDataOutputReference">TagIndexingRuleOptionsDataOutputReference</a>

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: IResolvable | TagIndexingRuleOptionsData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsData">TagIndexingRuleOptionsData</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TagIndexingRuleOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.tagIndexingRule.TagIndexingRuleOptions">TagIndexingRuleOptions</a>

---



