# `dataDatadogTeams` Submodule <a name="`dataDatadogTeams` Submodule" id="@cdktn/provider-datadog.dataDatadogTeams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogTeams <a name="DataDatadogTeams" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/teams datadog_teams}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.Initializer"></a>

```typescript
import { dataDatadogTeams } from '@cdktn/provider-datadog'

new dataDatadogTeams.DataDatadogTeams(scope: Construct, id: string, config?: DataDatadogTeamsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig">DataDatadogTeamsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig">DataDatadogTeamsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.putTeams">putTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.resetFilterKeyword">resetFilterKeyword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.resetFilterMe">resetFilterMe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.resetTeams">resetTeams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTeams` <a name="putTeams" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.putTeams"></a>

```typescript
public putTeams(value: IResolvable | DataDatadogTeamsTeams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.putTeams.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeams">DataDatadogTeamsTeams</a>[]

---

##### `resetFilterKeyword` <a name="resetFilterKeyword" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.resetFilterKeyword"></a>

```typescript
public resetFilterKeyword(): void
```

##### `resetFilterMe` <a name="resetFilterMe" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.resetFilterMe"></a>

```typescript
public resetFilterMe(): void
```

##### `resetTeams` <a name="resetTeams" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.resetTeams"></a>

```typescript
public resetTeams(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogTeams resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.isConstruct"></a>

```typescript
import { dataDatadogTeams } from '@cdktn/provider-datadog'

dataDatadogTeams.DataDatadogTeams.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.isTerraformElement"></a>

```typescript
import { dataDatadogTeams } from '@cdktn/provider-datadog'

dataDatadogTeams.DataDatadogTeams.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.isTerraformDataSource"></a>

```typescript
import { dataDatadogTeams } from '@cdktn/provider-datadog'

dataDatadogTeams.DataDatadogTeams.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.generateConfigForImport"></a>

```typescript
import { dataDatadogTeams } from '@cdktn/provider-datadog'

dataDatadogTeams.DataDatadogTeams.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogTeams resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogTeams to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogTeams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/teams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogTeams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.teams">teams</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList">DataDatadogTeamsTeamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.filterKeywordInput">filterKeywordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.filterMeInput">filterMeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.teamsInput">teamsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeams">DataDatadogTeamsTeams</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.filterKeyword">filterKeyword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.filterMe">filterMe</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.teams"></a>

```typescript
public readonly teams: DataDatadogTeamsTeamsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList">DataDatadogTeamsTeamsList</a>

---

##### `filterKeywordInput`<sup>Optional</sup> <a name="filterKeywordInput" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.filterKeywordInput"></a>

```typescript
public readonly filterKeywordInput: string;
```

- *Type:* string

---

##### `filterMeInput`<sup>Optional</sup> <a name="filterMeInput" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.filterMeInput"></a>

```typescript
public readonly filterMeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `teamsInput`<sup>Optional</sup> <a name="teamsInput" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.teamsInput"></a>

```typescript
public readonly teamsInput: IResolvable | DataDatadogTeamsTeams[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeams">DataDatadogTeamsTeams</a>[]

---

##### `filterKeyword`<sup>Required</sup> <a name="filterKeyword" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.filterKeyword"></a>

```typescript
public readonly filterKeyword: string;
```

- *Type:* string

---

##### `filterMe`<sup>Required</sup> <a name="filterMe" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.filterMe"></a>

```typescript
public readonly filterMe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeams.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogTeamsConfig <a name="DataDatadogTeamsConfig" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.Initializer"></a>

```typescript
import { dataDatadogTeams } from '@cdktn/provider-datadog'

const dataDatadogTeamsConfig: dataDatadogTeams.DataDatadogTeamsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.filterKeyword">filterKeyword</a></code> | <code>string</code> | Search query. Can be team name, team handle, or email of team member. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.filterMe">filterMe</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, only returns teams the current user belongs to. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.teams">teams</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeams">DataDatadogTeamsTeams</a>[]</code> | teams block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `filterKeyword`<sup>Optional</sup> <a name="filterKeyword" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.filterKeyword"></a>

```typescript
public readonly filterKeyword: string;
```

- *Type:* string

Search query. Can be team name, team handle, or email of team member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/teams#filter_keyword DataDatadogTeams#filter_keyword}

---

##### `filterMe`<sup>Optional</sup> <a name="filterMe" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.filterMe"></a>

```typescript
public readonly filterMe: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, only returns teams the current user belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/teams#filter_me DataDatadogTeams#filter_me}

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsConfig.property.teams"></a>

```typescript
public readonly teams: IResolvable | DataDatadogTeamsTeams[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeams">DataDatadogTeamsTeams</a>[]

teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/data-sources/teams#teams DataDatadogTeams#teams}

---

### DataDatadogTeamsTeams <a name="DataDatadogTeamsTeams" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeams.Initializer"></a>

```typescript
import { dataDatadogTeams } from '@cdktn/provider-datadog'

const dataDatadogTeamsTeams: dataDatadogTeams.DataDatadogTeamsTeams = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogTeamsTeamsList <a name="DataDatadogTeamsTeamsList" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.Initializer"></a>

```typescript
import { dataDatadogTeams } from '@cdktn/provider-datadog'

new dataDatadogTeams.DataDatadogTeamsTeamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.get"></a>

```typescript
public get(index: number): DataDatadogTeamsTeamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeams">DataDatadogTeamsTeams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogTeamsTeams[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeams">DataDatadogTeamsTeams</a>[]

---


### DataDatadogTeamsTeamsOutputReference <a name="DataDatadogTeamsTeamsOutputReference" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.Initializer"></a>

```typescript
import { dataDatadogTeams } from '@cdktn/provider-datadog'

new dataDatadogTeams.DataDatadogTeamsTeamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.handle">handle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.linkCount">linkCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.summary">summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.userCount">userCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeams">DataDatadogTeamsTeams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `handle`<sup>Required</sup> <a name="handle" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.handle"></a>

```typescript
public readonly handle: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkCount`<sup>Required</sup> <a name="linkCount" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.linkCount"></a>

```typescript
public readonly linkCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.summary"></a>

```typescript
public readonly summary: string;
```

- *Type:* string

---

##### `userCount`<sup>Required</sup> <a name="userCount" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.userCount"></a>

```typescript
public readonly userCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogTeamsTeams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogTeams.DataDatadogTeamsTeams">DataDatadogTeamsTeams</a>

---



